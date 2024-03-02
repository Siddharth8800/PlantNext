from llama_cpp import Llama


model = r"B:\PlantIT\api\mistral-7b-instruct-v0.2.Q5_K_S.gguf"


llm = Llama(
    model_path=model,
    temperature=0.75,
    n_gpu_layers= -1,
    verbose=True,
    context_window=2048,

)

def generate(question):
    prompt = f"""
    Question: {question}
    """
    output = llm(
        prompt,
        max_tokens=512)
    final = output['choices'][0]['text']
    return final

