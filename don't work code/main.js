// //! проверка за полненность полей
// addBtn.addEventListener("click", () => {
//     if (!name.value.trim() || !email.value.trim() || !number.value.trim()) {
//       alert("Заполните все поля!");
//       return;
//     }
//     let obj = {
//       contact: image.value && name.value && email.value && number.value,
//     };
//     setItemToStorage(obj);
//     createElement();

//     image.value = "";
//     name.value = "";
//     email.value = "";
//     number.value = "";
//   });

//   createElement();

//   function setItemToStorage(contact) {
//     if (!localStorage.getItem("contacts-data")) {
//       localStorage.getItem("contacts-data", "[]");
//     }
//     let data = JSON.parse(localStorage.getItem("contacts-data"));
//     data.push(contact);

//     localStorage.setItem("contacts-data", JSON.stringify(data));
//   }

//   //! функция для отрисовки элементов в браузере
//   function createElement() {
//     let newData = JSON.parse(localStorage.getItem("contacts-data"));
//     recordContainer.innerHTML = "";
//     newData.forEach((item, index) => {
//       let li = document.createElement("li");
//       li.innerText = item.contact;

//       li.append(btnDelete);
//       li.append(btnEdit);

//       editBtn.addEventListener("click", () => {
//         editElement(index);
//       });

//       deleteBtn.addEventListener("click", () => {
//         deleteElement(index);
//       });
//       recordContainer.append(li);
//     });
//   }

//   //! функция для удаления контакта
//   function deleteElement(index) {
//     let data = JSON.parse(localStorage.getItem("contacts-data"));
//     data.splice(index, 1);
//     localStorage.setItem("contacts-data", JSON.stringify(data));
//     createElement();
//   }

//   let mainModal = document.querySelector(".main-modal");
//   let inpEdit = document.querySelector(".inp-edit");
//   let btnSave = document.querySelector(".btn-save");
//   let btnClose = document.querySelector(".btn-close");

//   //! функция редактирования
//   function editElement(index) {
//     mainModal.style.display = "block";
//     let data = JSON.parse(localStorage.getItem("contacts-data"));
//     inpEdit.setAttribute("id", index);
//     inpEdit.value = data[index].id;
//   }

//   //! Слушатель события для кнопки отмены

//   btnClose.addEventListener("click", () => {
//     mainModal.style.display = "none";
//   });

//   //! Слушатель события для кнопки сохранения

//   btnSave.addEventListener("click", () => {
//     let data = JSON.parse(localStorage.getItem("contacts-data"));
//     let index = inpEdit.id;
//     if (!inpEdit.value.trim()) {
//       alert("Внесите изменения в поле!");
//       return;
//     }
//     let newContact = { contact: inpEdit.value };
//     data.splice(index, 1, newContact);
//     localStorage.setItem("contacts-data", JSON.stringify(data));
//     mainModal.style.display = "none";
//   });
