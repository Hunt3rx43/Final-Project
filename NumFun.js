		function vIter()
        {
            document.getElementById('taOut').value = '';

            var iNumber = parseInt(document.getElementById('txtInt').value);

            var i;

            var iCount = 1;

            var iIter;

            document.getElementById('taOut').value += iNumber + '\r';

            if (iNumber > 1 && iNumber % 2 == 0)
                iNumber = iNumber / 2;

            else if (iNumber > 1 && iNumber % 2 != 0)
                iNumber = iNumber * 3 + 1;

            document.getElementById('taOut').value += iNumber + '\r';

            iCount = parseFloat(iCount)
            do {
                iNumber = Math.floor(iNumber / 2);
                document.getElementById('taOut').value += iNumber + '\r';
                iCount++
            } while (iNumber != 1)

            document.getElementById('taOut').value += 'It took ' + iCount + ' iterations to get to 1.';
        }