import axios from "axios";
import type {Ref} from "vue";


export function fetchChat (content: string, outputRef: Ref<any>) {
    outputRef.value = "";
    fetch(`${import.meta.env.VITE_APP_FLASK_URL}/chat`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: content
        })
    })
        .then(response => {
            if (!response.body) return;
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
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