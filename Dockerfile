# Usa una imagen oficial de Node
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias primero (para aprovechar la cache de Docker)
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto del servidor
EXPOSE 3000

# Comando por defecto (puedes sobrescribirlo en docker-compose)
CMD ["npm", "run", "dev"]
