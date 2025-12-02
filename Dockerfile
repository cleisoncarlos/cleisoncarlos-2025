
# ==============================================================================
# --- ESTÁGIO 1: BUILD ---
# Esta etapa instala dependências e constrói a aplicação.
# ==============================================================================
FROM node:20-alpine AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia package.json e arquivos de lock PRIMEIRO.
# Isso maximiza o cache do Docker, pulando a instalação se apenas o código mudar.
COPY package.json yarn.lock package-lock.json ./

# Instala as dependências.
# Se o .dockerignore estiver configurado (recomendado), isso será rápido.
RUN npm install

# Copia todo o código-fonte restante para o container.
# Isso incluirá sua pasta 'src/' e 'public/'.
COPY . .

# Comando para construir a aplicação Next.js.
# O 'output: "standalone"' no next.config.js é crucial nesta etapa.
RUN npm run build

# ==============================================================================
# --- ESTÁGIO 2: PRODUÇÃO (Servidor Final) ---
# Esta etapa cria a imagem mínima de produção (apenas o necessário para rodar).
# ==============================================================================
FROM node:20-alpine AS runner

# Por segurança, use o usuário 'node' padrão e não o 'root'.
USER node

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de produção do ESTÁGIO DE BUILD
# 1. Copia ativos estáticos (imagens, etc.) da pasta 'public'.
COPY --from=builder --chown=node:node /app/public ./public
# 2. Copia o servidor standalone (o resultado de 'output: "standalone"').
COPY --from=builder --chown=node:node /app/.next/standalone ./
# 3. Copia ativos estáticos e chunks para o runtime.
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

# Variável de ambiente crucial para o modo de produção do Next.js.
ENV NODE_ENV=production

# Exponha a porta que o Next.js usa por padrão.
EXPOSE 3000

# Comando para iniciar o servidor Next.js standalone.
# 'server.js' é o arquivo gerado pelo modo standalone.
CMD ["node", "server.js"]
