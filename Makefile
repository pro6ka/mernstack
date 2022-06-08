up:
	docker compose up -d --build
	notify-send --category=im.received "api started!"

down:
	docker compose down

restart: clear down up logs-api

logs-%:
	docker compose logs $* -f

clear:
	clear

ps:
	docker compose ps
