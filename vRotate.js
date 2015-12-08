        function vRotate1()
        {
            var strTxtA = document.getElementById('txtA').value;
            var strTxtB = document.getElementById('txtB').value;
            var strTxtC = document.getElementById('txtC').value;
            var strTxtD = document.getElementById('txtD').value;
            document.getElementById('txtA').value = strTxtC;
            document.getElementById('txtB').value = strTxtA;
            document.getElementById('txtC').value = strTxtD;
            document.getElementById('txtD').value = strTxtB;
        }
        function vRotate2()
        {
            var strTxtA = document.getElementById('txtA').value;
            var strTxtB = document.getElementById('txtB').value;
            var strTxtC = document.getElementById('txtC').value;
            var strTxtD = document.getElementById('txtD').value;
            document.getElementById('txtA').value = strTxtB;
            document.getElementById('txtB').value = strTxtD;
            document.getElementById('txtC').value = strTxtA;
            document.getElementById('txtD').value = strTxtC;
        }