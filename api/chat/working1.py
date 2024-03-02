from llama_cpp import Llama

llm = Llama(
  model_path="stablelm-zephyr-3b.Q4_K_M.gguf",  # Download the model file first
  n_ctx=768,  # The max sequence length to use - note that longer sequence lengths require much more resources
  n_gpu_layers=0,         # The number of layers to offload to GPU, if you have GPU acceleration available
  context_window=768,
  temperature=0.4,
)

def generate(question):

    output = llm(
    f"<|user|>\n{question}", 
    max_tokens=256,  # Generate up to 512 tokens
    stop=["</s>"],   # Example stop token - not necessarily correct for this specific model! Please check before using.
    echo=True        # Whether to echo the prompt
    )

    final = output['choices'][0]["text"]
    start_index = final.find("<|assistant|>")

    if start_index != -1:
    # Content found, extract substring starting from the desired index
        modified_output = final[start_index + 13:]
    else:
    # Content not found, handle the case if necessary
        modified_output = "Content not found in the specified format."

    return modified_output
