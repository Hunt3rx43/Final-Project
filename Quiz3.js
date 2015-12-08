		function vCheck(fScore)
        {
            if (isNaN(fScore))
                document.getElementById('txtOut').value = 'Please enter a valid score';
            if (fScore > 100)
                document.getElementById('txtOut').value = 'Number must be between 0 and 100';
            if (fScore < 0)
                document.getElementById('txtOut').value = 'Number must be between 0 and 100';
            fScore = parseFloat(fScore);
            if (fScore >= 70)
                document.getElementById('txtOut').value = 'You passed!';
            else if (fScore < 70)
                document.getElementById('txtOut').value = 'You Failed.';
        }