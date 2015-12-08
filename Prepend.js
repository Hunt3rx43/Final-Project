function vPrepend()
        {
            document.getElementById('taMessage').value = document.getElementById('txtBox').value + '\r' + document.getElementById('taMessage').value;
            document.getElementById('txtBox').value = '';
        }
        function vAppend()
        {
            document.getElementById('taMessage').value = document.getElementById('taMessage').value + document.getElementById('txtBox').value + '\r';
            document.getElementById('txtBox').value = '';
        }