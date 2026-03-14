## Architecture
User
 ↓
AWS EC2 (Amazon Linux)
 ↓
Docker Containers
 ↓
Kubernetes Cluster (k3s)
 ↓
Frontend Pods (2 replicas)
Backend Pods (2 replicas)
 ↓
Kubernetes Service (NodePort)
 ↓
Browser Access
