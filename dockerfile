# Usar la imagen base de Node.js
FROM node:18-alpine

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código de la aplicación al contenedor
COPY . .

# Crear el build de la aplicación
RUN npm run build

# Exponer el puerto 3000 en el contenedor
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
