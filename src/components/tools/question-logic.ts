import axios from "axios";
import type { Ref } from "vue";

interface ResponseData {
    result: string;
    likely: number;
}

export async function fetchQuestion(content: string, tokens: Ref, probs: Ref) {
    try {
        const response = await axios.post<ResponseData>(import.meta.env.VITE_APP_FLASK_URL + '/send_log_chat', {
            message: content
        });
        tokens.value = response.data.result;
        probs.value = response.data.likely;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch question.');
    }
}
