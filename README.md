## Docker
1. docker build -t myjavatest:1.0.0 .
2. docker build -t frontend_env:1.0.0 .

## Kustomize
1. kubectl apply -k mysql
2. kubectl apply -k myjava
3. kubectl apply -k frontend

3. kubectl delete -k frontend
2. kubectl delete -k myjava
1. kubectl delete -k mysql

## Port Forwarding per il frontend
1. kubectl port-forward -n myapp svc/frontend 4200:4200
