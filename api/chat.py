from llama_cpp import Llama

def load_model():
    global llm
    llm = Llama(
      model_path=r"B:\PlantIT\PlantNext\api\mistral-7b-instruct-v0.2.Q5_K_S.gguf",  # Download the model file first
      n_ctx=768,  # The max sequence length to use - note that longer sequence lengths require much more resources
      n_gpu_layers=-1,         # The number of layers to offload to GPU, if you have GPU acceleration available
      context_window=1024,
      temperature=0.7,
      n_threads=4,
    )
    global messages
    messages = []
    messages.append({"role": "system", "content":" Do not answer as user. Do not ask questions and do not complete user's questions. Always answer in a short but precise way. Answer as assistant"})


def clear_context():
  global messages
  messages.clear()
  messages.append({"role": "system", "content":" Do not answer as user. Do not ask questions and do not complete user's questions. Always answer in a short but precise way. Answer as assistant"})

# import re

# def generate(question):
#   messages.append({"role": "user", "content": question})
#   prompt = " \n".join([f'{message["role"]}: {message["content"]}' for message in messages])
#   output = llm(prompt, max_tokens=128)
#   final = output['choices'][0]['text'].strip()
#   # Remove any questions from the assistant's response
#   final = re.sub(r'\?.*$', '', final)
#   messages.append({"role": "assistant", "content": final})
#   return final

# Only user context
# def generate(question):
#   messages.append({"role": "user", "content": question})
#   prompt = " \n".join([f'{message["role"]}: {message["content"]}' for message in messages if message["role"] != "assistant"])
#   output = llm(prompt, max_tokens=128)
#   final = output['choices'][0]['text'].strip()
#   messages.append({"role": "assistant", "content": final})
#   return final

def generate(question):
  messages.append({"role": "user", "content": question})
  prompt = " \n".join([f'{message["role"]}: {message["content"]}' for message in messages])
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
