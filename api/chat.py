from llama_cpp import Llama

def load_model():
    global llm
    llm = Llama(
      model_path="/Users/siddharth/Desktop/PlantGenie/api/mistral-7b-instruct-v0.2.Q2_K.gguf",  # Download the model file first
      n_ctx=768,  # The max sequence length to use - note that longer sequence lengths require much more resources
      n_gpu_layers=0,         # The number of layers to offload to GPU, if you have GPU acceleration available
      context_window=768,
      temperature=0.7,
      n_threads=4,
    )
    global messages
    messages = []
    messages.append({"role": "system", "content":"Always answer in a short but precise way. Do not answer as user. Do not ask questions. Answer as assistant"})


def generate(question):
  messages.append({"role": "user", "content": question})
  prompt = " ".join([f'{message["role"]}: {message["content"]}' for message in messages])
  output = llm(prompt, max_tokens=128)
  final = output['choices'][0]['text'].strip()
  messages.append({"role": "assistant", "content": final})
  return final

# def generate(question):
#   messages.append({"role": "user", "content": question})
#   prompt = "".join([message["content"] for message in messages])
#   output = llm(prompt, max_tokens=128)
#   final = output['choices'][0]['text'].strip()
#   messages.append({"role": "assistant", "content": final})
#   return final
