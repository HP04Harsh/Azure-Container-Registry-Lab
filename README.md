[Azure-Container-Registry-Lab](https://github.com/HP04Harsh/Azure-Container-Registry-Lab)
=========================================================================================

A hands-on laboratory project demonstrating how to containerize a **Node.js** application using **Docker** and automate the CI/CD workflow with **GitHub Actions**. This repository serves as a practical guide for building, pushing, and managing container images within the **Azure Container Registry (ACR)** ecosystem.

🚀 Overview
-----------

This lab guides you through the process of taking a simple web application and moving it into a professional cloud-native workflow. By using this repo, you will learn how to:

*   Write a production-ready [Dockerfile](https://github.com/HP04Harsh/Azure-Container-Registry-Lab/blob/main/Dockerfile).
    
*   Set up an [Azure Container Registry](https://azure.microsoft.com/en-us/products/container-registry/) instance.
    
*   Automate image builds and registry pushes using [GitHub Actions](https://github.com/HP04Harsh/Azure-Container-Registry-Lab/tree/main/.github/workflows).
    

🛠 Tech Stack
-------------

*   **Runtime:** [Node.js](https://github.com/HP04Harsh/Azure-Container-Registry-Lab/blob/main/package.json)
    
*   **Containerization:** [Docker](https://github.com/HP04Harsh/Azure-Container-Registry-Lab/blob/main/Dockerfile)
    
*   **Cloud Registry:** Azure Container Registry (ACR)
    
*   **CI/CD:** [GitHub Actions](https://github.com/HP04Harsh/Azure-Container-Registry-Lab/tree/main/.github/workflows)
    

📁 Project Structure
--------------------

*   app.js: The core [Node.js application](https://github.com/HP04Harsh/Azure-Container-Registry-Lab/blob/main/app.js) logic.
    
*   Dockerfile: Instructions for building the container image.
    
*   .github/workflows/: Contains the YAML files for automated deployment.
    

⚙️ Getting Started
------------------
```
1.  git clone https://github.com/HP04Harsh/Azure-Container-Registry-Lab.git
    
2.  Bashdocker build -t node-acr-app .
    
3.  **Configure Secrets:** Add your Azure credentials (ACR\_LOGIN\_SERVER, ACR\_USERNAME, and ACR\_PASSWORD) to your GitHub repository secrets to enable the [automated workflow](https://github.com/HP04Harsh/Azure-Container-Registry-Lab/tree/main/.github/workflows).
```
