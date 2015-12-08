		function vGo()
        {
            document.getElementById('taOut').value = '';

            var iNumber = parseInt(document.getElementById('txtNumber').value);

            var i;

            var iSum = 0;

            if (isNaN(iNumber))
                document.getElementById('taOut').value = 'Please type a Positive interger'

            else if (document.getElementById('TypeMenu').value == 'e')
            {
                for (i = 1; i <= iNumber*2; i++)
                    if (i % 2 == 0)
                    {
                        document.getElementById('taOut').value += i + ' ';
                        iSum += i
                    }
            }

            else if (document.getElementById('TypeMenu').value == 'o')
            {
                for (i = 1; i <= iNumber * 2 - 1; i++)
                    if (i % 2 != 0)
                    {
                        document.getElementById('taOut').value += i + ' ';
                        iSum += i
                    }
            }

            if (document.getElementById('cbSum').checked)
               
                document.getElementById('taOut').value += '\r The sum of these numbers is ' + iSum;
        }