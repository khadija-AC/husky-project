# husky-project
# Objectif du Projet
Ce projet vise à améliorer la qualité du code en appliquant des pratiques strictes de gestion des commits et de formatage du code. Nous utilisons Husky pour faire respecter les commits conventionnels et garantir que le format de code est conforme avant chaque push. Cette approche permet de maintenir un codebase propre, cohérent et facile à maintenir, tout en facilitant le travail en équipe et en minimisant les erreurs potentielles.


# Guide de Test
Pour tester ce projet, suivez les étapes suivantes :

1. Clonez ce dépôt sur votre machine à l'aide de la commande :
~~~ bash
git clone https://github.com/khadija-AC/husky-project.git
~~~
2. Accédez au répertoire du projet avec la commande :
~~~ bash
cd husky-project
~~~
3. Une fois dans le répertoire husky-project, exécutez la commande suivante pour installer toutes les dépendances nécessaires :
~~~bash
npm install
~~~
## Remarque
Si vous rencontrez des erreurs comme :
~~~bash 
hint : The '.husky/pre-commit' hook was ignored it's not set as executable
hint : The '.husky/prepare-commit-msg' hook was ignored it's not set as executable
hint : The '.husky/commit-msg' hook was ignored it's not set as executable
~~~
Exécutez les commandes suivantes pour rendre les hooks exécutables :
~~~bash
chmod +x .husky/pre-commit
chmod +x .husky/prepare-commit-msg
chmod +x .husky/commit-msg
~~~
Maintenant, votre environnement est prêt pour tester ce projet.

# Test
Pour tester, modifiez le fichier **index.js** (par exemple, en ajoutant ou supprimant une variable, ou en ajoutant des lignes de code). Si vous rencontrez un message d'erreur d'ESLint indiquant qu'il y a une erreur dans le fichier (par exemple, si vous déclarez une variable ou une fonction jamais utilisée), vous devez corriger le problème pour continuer le commit.

Ainsi, vous pouvez tester notre projet, et nous espérons que cela vous aidera dans vos projets futurs.




