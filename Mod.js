			function vConvert() 
			{
			    var iInput = document.getElementById('txtInput').value;

            var strOutput = '';

            if (isNaN(iInput))
                strOutput = 'Please type in a number.';
            else if (iInput < 0)
                strOutput = 'Negative measurements are bad.'
            else
            {
                iInput = parseInt(iInput);
                var iDay, iHour, iMinutes, iSeconds, iRemHour, iRemMinutes, iRemSeconds;

                iSeconds = iInput % 60;
                iRemSeconds = iInput - iSeconds;
                iRemMinutes = iRemSeconds / 60;
                iMinutes = iRemMinutes % 60;
                iRemMinutes = iRemMinutes - iMinutes;
                iRemHour = iRemMinutes / 60;
                iHour = iRemHour % 24;
                iRemHour = iRemHour - iHour;
                iDay = iRemHour / 24;

                if (iDay != 0)
                {
                    if (iDay == 1)
                        strOutput = iDay + ' day, ';
                    else
                        strOutput = iDay + ' days, ';
                }

                if (iHour != 0)
                {
                    if (iHour == 1)
                        strOutput += iHour + ' hour, ';
                    else
                        strOutput += iHour + ' hours, ';
                }

                if (iMinutes != 0)
                {
                    if (iMinutes == 1)
                        strOutput += iMinutes + ' minute, ';
                    else
                        strOutput += iMinutes + ' minutes, ';
                }

                if (iSeconds != 0)
                {
                    if (iSeconds == 1)
                        strOutput += iSeconds + ' second';
                    else
                        strOutput += iSeconds + ' seconds';
                }
            }
            document.getElementById('txtOutput').value = strOutput
        }