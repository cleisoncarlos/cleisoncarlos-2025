# Etapa 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Instala dependências do sistema necessárias para pacotes nativos
RUN apk add --no-cache python3 make g++

# Copia arquivos de dependência
COPY package*.json ./

# Instala todas as dependências (incluindo dev, pois precisamos para build)
RUN npm install

# Copia o restante do código
COPY . .

# Faz o build da aplicação Next.js
RUN npm run build


# Etapa 2: Produção
FROM node:18-alpine AS runner

WORKDIR /app

# Copia apenas os arquivos necessários da etapa de build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expõe a porta padrão do Next.js
EXPOSE 3000

# Comando para rodar em produção
CMD ["npm", "run", "start"]
