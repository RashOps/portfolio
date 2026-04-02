# postgreSQL_workflow
# Workflow n8n : Notificateur IA pour Base de Données PostgreSQL

Lien du repo github : https://github.com/RashOps/postgreSQL_workflow

Ce projet est un workflow [n8n](https://n8n.io/) qui surveille les changements (création, mise à jour, suppression) dans une table d'une base de données PostgreSQL. Il utilise ensuite un agent IA (propulsé par OpenAI) pour générer une notification humaine et détaillée, puis l'envoie par e-mail via Gmail.

Image N8N du workflow disponible sur [Dockerhub.com](https://hub.docker.com/r/n8nio/n8n)

## 🚀 Fonctionnalités

- **Déclencheur en temps réel** : Se déclenche instantanément lorsqu'une modification est apportée à la table `taches`.
- **Agent IA intelligent** : Utilise un modèle de langage (GPT) pour analyser les données brutes de la base de données et rédiger un message clair et informel.
- **Notification par E-mail** : Envoie une notification formatée via Gmail.
- **Facile à adapter** : Conçu pour être facilement modifiable pour d'autres canaux (Telegram, Slack, etc.) ou d'autres tables de base de données.

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir :

1.  **Un compte n8n** : auto-hébergé ou sur n8n.cloud.
2.  **Une base de données PostgreSQL** accessible par votre instance n8n.
3.  **Un compte OpenAI** : avec une clé API.
4.  **Un compte Google (Gmail)** : pour lequel vous pouvez créer des identifiants OAuth2.

## 🛠️ Instructions d'Installation

### Étape 1 : Configuration de la Base de Données PostgreSQL

Pour que n8n puisse écouter les changements, vous devez configurer une fonction de déclenchement et une notification dans votre base de données.

1.  Connectez-vous à votre base de données PostgreSQL.
2.  Exécutez le script SQL fourni dans le fichier `setup.sql` de ce dépôt. Ce script va :
    - Créer une table de démonstration `taches`.
    - Créer une fonction qui envoie une notification sur le canal `taches_changes` à chaque modification.
    - Attacher cette fonction comme déclencheur (trigger) à la table `taches`.

### Étape 2 : Configuration du Workflow n8n

1.  **Importer le Workflow** : Téléchargez le fichier `PostgreSQL_notif_workflow.json` et importez-le dans votre instance n8n.

2.  **Configurer les Identifiants (Credentials)** :
    - **Postgres Trigger** : Sélectionnez ou créez un identifiant pour vous connecter à votre base de données PostgreSQL.
    - **OpenAI** : Sélectionnez ou créez un identifiant en utilisant votre clé API OpenAI.
    - **Send a message (Gmail)** : Sélectionnez ou créez un identifiant Gmail (OAuth2). Suivez les instructions de n8n pour le générer si nécessaire.

3.  **Personnaliser les Nœuds** :
    - **Postgres Trigger** : Assurez-vous que le nom du canal (`Channel Name`) est bien `taches_changes` (ou celui que vous avez défini dans le script SQL).
    - **Send a message (Gmail)** : Modifiez les adresses e-mail des destinataires dans le champ "Send To".

4.  **Activer le Workflow** : Sauvegardez et activez le workflow.

## ⚙️ Comment ça marche ?

1.  **Postgres Trigger** : Le workflow est en écoute permanente sur le canal `taches_changes` de la base de données.
2.  **Déclenchement** : Lorsqu'une tâche est ajoutée, modifiée ou supprimée dans la table `taches`, le trigger SQL envoie une charge utile (payload) JSON au canal.
3.  **Postgres Agent (IA)** : Le nœud agent reçoit cette charge utile. Il l'insère dans un prompt prédéfini et demande au modèle OpenAI de générer un message de notification.
4.  **Send a message (Gmail)** : Le message généré par l'IA est ensuite transmis au nœud Gmail, qui l'envoie aux destinataires configurés.

## 📂 Fichiers du Dépôt

-   **`README.md`** : Ce fichier d'instructions.
-   **`PostgreSQL_notif_workflow.json`** : Le fichier du workflow n8n à importer.
-   **`setup.sql`** : Le script SQL pour préparer votre base de données PostgreSQL.

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
