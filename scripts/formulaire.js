const inscription = document.getElementById("inscription-link");
inscription.addEventListener("click", function (e) {
  const container = document.getElementById("formulaire-container");

  const form = document.createElement("form");

  form.setAttribute(
    "style",
    "background: #fff; padding: 2rem; border-radius: 1rem; box-shadow: 0 0 20px rgba(0,0,0,0.1); width: 500px; max-width: 100%; margin: 0 auto; display: block;"
  );

  const h2 = document.createElement("h2");
  h2.textContent = "Inscription à la newsletter";
  h2.setAttribute(
    "style",
    "text-align: center; color: #333; margin-bottom: 1.5rem;"
  );
  form.appendChild(h2);

  // Crée un champ pour le nom
  const divNom = document.createElement("div");
  divNom.setAttribute("style", "margin-bottom: 1.5rem;");
  const labelNom = document.createElement("label");
  labelNom.setAttribute("for", "nom");
  labelNom.textContent = "Nom :";
  const inputNom = document.createElement("input");
  inputNom.setAttribute("type", "text");
  inputNom.setAttribute("id", "nom");
  inputNom.setAttribute("name", "nom");
  inputNom.setAttribute("required", true);
  inputNom.setAttribute(
    "style",
    "width: 100%; padding: 0.8rem; border-radius: 5px; border: 1px solid #ccc;"
  );
  divNom.appendChild(labelNom);
  divNom.appendChild(inputNom);
  form.appendChild(divNom);

  // Crée un champ pour l'email
  const divEmail = document.createElement("div");
  divEmail.setAttribute("style", "margin-bottom: 1.5rem;");
  const labelEmail = document.createElement("label");
  labelEmail.setAttribute("for", "email");
  labelEmail.textContent = "Email :";
  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("id", "email");
  inputEmail.setAttribute("name", "email");
  inputEmail.setAttribute("required", true);
  inputEmail.setAttribute(
    "style",
    "width: 100%; padding: 0.8rem; border-radius: 5px; border: 1px solid #ccc;"
  );
  divEmail.appendChild(labelEmail);
  divEmail.appendChild(inputEmail);
  form.appendChild(divEmail);

  // Crée un bouton pour soumettre le formulaire
  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.textContent = "S'inscrire";
  button.setAttribute(
    "style",
    "background-color: rgb(132, 169, 140); color:rgb(53, 79, 82); padding: 0.8rem 1.2rem; border: none; border-radius: 5px; cursor: pointer; margin-top: 1.5rem; width: 100%;"
  );
  form.appendChild(button);

  // Crée un bouton "Fermer" pour fermer le formulaire
  const closeButton = document.createElement("button");
  closeButton.textContent = "Fermer";
  closeButton.setAttribute("type", "button");
  closeButton.setAttribute(
    "style",
    "background-color: rgb(53, 79, 82); color: white; padding: 0.8rem 1.2rem; border: none; border-radius: 5px; cursor: pointer; margin-top: 1rem; width: 100%;"
  );

  closeButton.addEventListener("click", function () {
    container.removeChild(form);
    container.removeAttribute("style");
  });

  form.appendChild(closeButton);

  container.appendChild(form);

  container.setAttribute(
    "style",
    "display: flex; justify-content: center; align-items: center; height: 100vh; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.3);"
  );
});
