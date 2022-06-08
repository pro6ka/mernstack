up:
	docker compose up -d --build
	notify-send --category=im.received "api started!"

down:
	docker compose down

restart: down up logs-api

logs-%:
	docker compose logs $* -f

ps:
	docker compose ps
