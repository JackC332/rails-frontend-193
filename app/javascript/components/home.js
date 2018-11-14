import swal from 'sweetalert';
import $ from 'jquery';
import 'select2';
import 'select2/dist/css/select2.css';


function bindSweetAlertButtonDemo() {
  const swalButton = document.getElementById('sweet-alert-demo');
  if (swalButton) { // protect other pages
    swalButton.addEventListener('click', () => {
      swal({
        title: "A nice alert",
        text: "This is a great alert, isn't it?",
        icon: "success"
      });
    });
  }
}

function toggleBreedSelect() {
  $('.js-select').select2();
}

export { bindSweetAlertButtonDemo, toggleBreedSelect };
