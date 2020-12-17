$('#Modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var person_name = button.data('person_name')
    var phone_num = button.data('phone_num')
    var company_name = button.data('company_name')
    var email_planfix = button.data('email_planfix')
    var id = button.data('id') //TEMP
    var modal = $(this)
    modal.find('.modal-body .modal_person_name').val(person_name)
    modal.find('.modal-body .modal_phone_num').val(phone_num)
    modal.find('.modal-body .modal_company_name').val(company_name)
    modal.find('.modal-body .modal_email_planfix').val(email_planfix)
    modal.find('.modal-body .modal_id').val(id) //TEMP
})