build:
	docker-compose build --no-cache --force-rm
up:
	docker-compose up -d
down:
	docker-compose down --remove-orphans
app:
	docker-compose exec node sh
npm-install:
	docker-compose exec node npm install
npm-dev:
	docker-compose exec node npm run dev
npm-build:
	docker-compose exec node npm run build
init:
	npm create vite@latest src -- --template vue