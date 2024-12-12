# Objectif de l'application
L'application permet de saisir un texte, de définir un style pour le texte saisi. Et affiche ce texte avec son rendu juste en-dessous du texte saisi.

## Les messages

>Vous créez un formulaire permettant de saisir un texte.

>Un bouton select permettra de sélectionner un type de rendu pour le texte : palevioletred (choix par défaut) et tomato. Un autre champ permettra de sélectionner la taille du texte (nombre compris entre 15px et 20px), proposez les choix suivants : 15, 16, 17, 18, 19 et 20px.

>Une fois que l'on a validé, le texte est enregistré dans le store votre useReducer. Chaque rendu peut-être supprimer à l'aide d'un bouton de suppression.

```text

saisir le texte : [ Bonjour tout le monde ]  

Selectionnez un rendu : [ palevioletred ]

taille du texte : [15]

[ valider ]

---- Affichez le rendu sous la saisi

Texte 1 :

    [ Bonjour tout le monde ] 

    [Delete]
Texte 2 :

    [ Un autre texte avec un autre rendu ] 

    [Delete]
```