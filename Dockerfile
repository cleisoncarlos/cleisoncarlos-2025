# Usa Node mais recente e leve
FROM node:current-alpine

WORKDIR /app

# Copia dependências primeiro
COPY package*.json ./

# Instala dependências
RUN npm ci --omit=dev

# Copia o restante do código
COPY . .

# Build da aplicação Next.js
RUN npm run build

# Expõe a porta padrão do Next.js
EXPOSE 3000

# Comando para rodar em produção
CMD ["npm", "run", "start"]
