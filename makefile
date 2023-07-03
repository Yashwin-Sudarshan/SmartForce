IMAGE=smartforce-frontend
TAG=latest
PORT=5173

build:
	docker build -t "${IMAGE}:${TAG}" ./frontend

run: build
	docker run -p "${PORT}:${PORT}" -d "${IMAGE}:${TAG}"