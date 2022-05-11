.PHONY: hasura-console
hasura-console:
	@docker-compose exec hasura bash -c "apt-get install -y socat; cd /hasura; \
		socat TCP-LISTEN:8080,fork TCP:hasura:8080 & \
		socat TCP-LISTEN:9695,fork,reuseaddr,bind=hasura TCP:127.0.0.1:9695 & \
		socat TCP-LISTEN:9693,fork,reuseaddr,bind=hasura TCP:127.0.0.1:9693 & \
		hasura-cli console --log-level DEBUG --address "127.0.0.1" --no-browser || exit 1 "