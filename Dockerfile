FROM node

WORKDIR /app

COPY package.json .
COPY package-lock.json* ./

RUN npm install

COPY . .

# Expose the port the app runs in
EXPOSE 5173

# Define o comando de execução do servidor de desenvolvimento
CMD ["npm", "run", "dev"]


# Compila o código TypeScript (se necessário)
#RUN npm run build