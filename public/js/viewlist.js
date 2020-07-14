(function($) {
    'use strict';
    $(function() {
        var action = $('.icon-options-vertical');
        var dropAction = $('.dropdown-action');
        var cbSelectedAll = $('.selectAll');
        var cbSelected = $('.cb-select');
        var massDeleted = $('.btn-massDel');
        var btnExport = $('.btn-export');
        action.click(function(){
            dropAction.not($(this).closest('.more').find(dropAction)).addClass('hidden');
            if($(this).closest('.more').find(dropAction).hasClass('hidden')){
                $(this).closest('.more').find(dropAction).removeClass('hidden');
            }
            else {
                $(this).closest('.more').find(dropAction).addClass('hidden');
            }
            
        })
        cbSelectedAll.click(function(){ 
            var checkStatus = this.checked;
            cbSelected.each(function(){
                $(this).prop('checked', checkStatus);
            })
            massDeleted.prop('disabled', true);
            btnExport.prop('disabled', true);
            if(checkStatus == true) {
                massDeleted.prop('disabled', false);
                btnExport.prop('disabled', false);
            } 
        })
        cbSelected.click(function(){
            massDeleted.prop('disabled', true);
            btnExport.prop('disabled', true);
            cbSelected.each(function(){
                if(this.checked == true){
                    massDeleted.prop('disabled', false);
                     btnExport.prop('disabled', false);
                }
            })
        })
        /****Detail Header Action *****/
        var detailHeadAction = $('.more-action');
        detailHeadAction.click(function(){
            dropAction.toggleClass('hidden');
        })

        /*********Edit Ajax**********/
        var actionEditAjax = $(".action");
        var actionEdit = $('.edit');
        var submitEdit = $(".editable-submit");
        var cancelEdit = $(".editable-cancel");
        actionEditAjax.click(function(){
            var frEdit = $(this).closest('.filedValue').find('.edit');
            actionEdit.not(frEdit).addClass('hidden');
            var fieldValue = $(this).closest('.filedValue').find('.value').text();
            var inputE = $(this).closest('.filedValue').find('.input-sm');
            frEdit.removeClass('hidden');
            inputE.val(fieldValue);
        })
        cancelEdit.click(function(){
            $(this).closest('.filedValue').find('.edit').addClass('hidden');
        })
        submitEdit.click(function(){
            var frEdit = $(this).closest('.filedValue').find('.edit');
            var fieldValue = $(this).closest('.filedValue').find('.value');
            var inputE = $(this).closest('.filedValue').find('.input-sm').val();
            frEdit.addClass('hidden');
            fieldValue.text(inputE);
        })
    });
  })(jQuery);