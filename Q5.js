		function vProcess()
        {
            var iNum = parseInt(document.getElementById('txtNum').value);
            if ((iNum % 2) == 0)
            {
                document.getElementById('txtOut').value += iNum;
                document.getElementById('txtNum').value = '';
            }
            else
            {
                document.getElementById('txtOut').value = iNum + document.getElementById('txtOut').value;
                document.getElementById('txtNum').value = '';
            }
        }
        function vClear()
        {
            document.getElementById('txtNum').value = '';
            document.getElementById('txtOut').value = '';
        }