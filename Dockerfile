# Usa a versão mais recente do Node.js em Alpine (leve)
FROM node:current-alpine

# Define diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos de dependência primeiro (para otimizar cache)
COPY package*.json ./

# Instala dependências em modo produção
RUN npm ci --omit=dev

# Copia o restante do código
COPY . .

# Expõe a porta usada pela aplicação
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
