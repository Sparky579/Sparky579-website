import axios from "axios";
import { reactive } from '@vue/reactivity';
import type {Ref} from "vue";


export function fetchTranslate (content: string, src_lang: string, dst_lang: string, outputRef: Ref<any>, fix = null, easy=null) {
    outputRef.value = "";
    fetch(`${import.meta.env.VITE_APP_BACK_URL}/stream_chat`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: content,
            src_lang: src_lang,
            dst_lang: dst_lang,
            fix: fix,
            easy: easy
        })
    })
        .then(response => {
            if (!response.body) return;
            const reader = response.body.getReader();
            let decoder = new TextDecoder();
            return new ReadableStream({
                start(controller) {
                    function push() {
                        reader.read().then(({ done, value }) => {
                            if (done) {
                                controller.close();
                                return;
                            }
                            const str = decoder.decode(value, { stream: true });
                            // console.log(str);
                            outputRef.value += str;
                            controller.enqueue(value);
                            push();
                        }).catch(err => {
                            console.error('Stream reading error:', err);
                            controller.error(err);
                        });
                    }
                    push();
                }
            });
        })
        .then(stream => new Response(stream))
        .then(response => response.text())
        .then(text => {
            console.log(text);
        })
        .catch(error => {
            console.error('Error:', error);
        });


}