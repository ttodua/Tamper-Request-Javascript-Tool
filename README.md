This is a pure Javascript tool (browser agnostic) and doesn't need to install any Browser-Extensions.

This tool/script hooks into AJAX (POST) requests and you can tamper/modify/replay requests.

Installation
=
Can be used in console or as a browser-snippet.
 
1) Just select the code and drag into your browser toolbar to save it as a browser-bookmark (snippet).
2) Right-click > Edit > add the `javascript:` prefix in front of the code (and optionally change the name of snippet to whatever you like).

Usage
=
* Open any target website where you want to tamper the ajax-request (like "button-click", form-submission or etc...)
* Click the browser-bookmark to activate the code and you will see the primitive window.
![example](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlAAAACmCAIAAACa1CY/AAAcQUlEQVR42u2da5RU1ZWAj6TFbm0NjwygICAQg9gZ4wNJUCOBZJwhQXvQrAQdE/w1oJjgQkRR1mItRUVgBRWBP4ko8ZFEESUykxiRDKIJiEtnFBEBAW0EEmjkYbeAOLtrp4+7z723uvpVVV31fT963b516txzzr11v9r7nKo67vPPP3cAAACFznEIDwAAigGEBwAARQHCAwCAogDhAQBAUYDwAACgKEB4AABQFCA8AAAoChAeAAAUBY0Jr6rKLVrkVqxwmza5o0dz3VoAAIAIJSVuwAA3fLgbO9b17JlUKq3wHn/c3XYbngMAgPaBmO+ee9zVV8c+mCw8sd3kyXUbFzh3sXN9paJc9wQAACCKxGVbnXvZuddS/86aFeu8BOFVVbmhQ+tiu9HODc91TwAAADJhhXNLUnHeK69Ec5sJwpsxw82fXxfbjc116wEAADJnUSrOu/56d/vtwSMJwhsxwm3Y4CY6NyDXTQcAAMicTc7NdW7gQPfii8EjCcLr06cunzmXeTsAAGhXHHV10VpJidu2LXgkQXia+pwX7p6x/vpcdwUAAOALbh80P9w1IfW3qirY3QThie1uj6REAQAAcsiMGTNC5yE8AAAoPBAeAAAUBQgPAACKAoQHAABFAcIDAICiAOEBAEBRgPAAAKAoyIbwlixZcuONNy5dunTw4MFt3Z/q6mo59KRJk/r37x9bYPPmzXPmzJFud+7cWdu2YMGChQsXJpVPw9q1a1evXj1q1Kgnnnji5ptvLi0tbeveaYO3b98+ceLE2Efnzp3bu3fv0aNH+z21tbXTp0+/8soro4Pf6Fhl2PHly5c3ewwBALJGmwtP7qoTJkyQG3QWbOeaKDy5cYsh5s2bp/JrKnkovGiPAsE3aawy77gcVPYntQoAIB/IhvCad1dtHpkLb+/evdOmTbvzzjub3bA8FF707UWa8q0ovPStAgDIB7IqPJHNuHHj1q9fL/s1w6k36JUrV8qea6+9dvr06XL3lPvp008/XVFRMWXKlEGDBi1cuFDkVFlZKWUmT56sd1UtM3LkyDFjxtjn2sNpNm/x4sX2iSo8uU3Pnj07uNdr6lU2hg0bJkFSWVmZTQZqbRdeeKHc2V1CNBPUoEGktlx48MEHR48erfV85zvfefTRR6Xj0jAZE22ndta3XHq3fPlybb9PCFu12NHTyl0qq+mbZ/OZvm128P1Y2VxoIMJop2I7jvAAIM9pc+H5iMr6ozpFv379xAdSxptPQxOVhN7B9W6rupKqfEymZbzG/F3e36x79uypfvKO0UNrJVL4pptusllWOdCaNWvUmv72be/jviOPPPKIixOeTR5u2bKlc4rHHntMvGXTpzoOH3zwgWzXjfaECbt371bP+V5og9etW6f7bcd9k+yIWUXZrKY96FNPPXXVVVdp77SnNTU1jQovdliiV4G+/9Biub6kAQDiaVvhya1z5syZEqjJzddHSHZJhcXfc+3d097rrbeCO6yXjWzrzVo27NyVZuG8NWWPtMTfu4OVHb7ZvjZrmqShtE2NPhqY2B/LBmS+U7IdrDTxg+ObEYyA7Je/UsCKMLqGJXaskoQXNNWezWgHcR4A5DnZi/C88xYvXuwjM5t1dPV5OXvrjCozVnhRRfksqEfTnlVVVdIeMdP999/fo0ePaG5Q8dlFNYFEabNnzx4zZkz66S6fs/UZSJvF1ToDi3hRubTC88Vs9OlTlIofVS3z05/+1GYmbXJVk5OuMeF16dIlaViCjmM7AMh/crNoRcManbuysU40wstQeLERXuxaEltS7uZSm+Y8k3ymBxJZPvPMMxmuTPExlgjDyz4pbMpQeLERnsas0QZoH6+44oqXXnrJTov6oDnzCC8TzTvm8ACgPZA94cndf/ny5ddcc42LC0FUEqqfDIUn8YoGUjZZGjuHZ9tmI04Nv+6++25d0+Enq2x5daGEaH7OL2kJvp+P9O2Uf31H5NGpU6c2KcLTv/pcPy0XO4cXtMTHzX4lixWSbMtRggjPdl+O9fzzz2sklzQsAQgPAPKf7AlPb/SavfSLKu0KwNNPP139lHmEV15evmDBAmeyeTagDBKVasfgc2l2gYzc6GfNmqWFfYXOGEKfkiQ8m720CzJ9l/fv39+kCK+iouKRRx6RCm0iMVhHE+RLfSgWfKDeDsX48eN37NgRRHi2qb/61a+effZZH5QnDYsF4QFA/tPmwkvzTR8tIZuTRtm/m7fRoLUdfPAcAPKfbHy1mE0/tla7sya89Gsv24j2JbwgAgYAyE+y+OXRUrKy0j30kLvhBrd0aQu3144de/zEid/YurUV6wy2Pxs37kvLli2VhouqFy36okwSrdfBz0aNur1Tp8lbt3ZdtartOtjM7ciVAQDQLsjuryXkz1272dtphFcYHWx0GwCgfcLPAwEAQFGA8AAAoChAeAAAUBQgPAAAKAoQHgAAFAUIDwAAigKEBwAARQHCAwCAAmfKlCkzZ85EeAAAUMio7RwRHgAAFDDedg7hAQBAoWJt5xAeAAAUJNZ2zOEBAEBhErWdI8IDAIACI9Z2DuEBAEAhkWQ7h/AAAKBIaBPhuZTzct01AACALwht51pJeAAAAPkOwgMAgKIA4QEAQFGA8AAAoChAeAAAUBSwShMAAAqPNlmlyefwAAAg3+CD5wAAUBQgPAAAKAoQHgAAFAUIDwAAigKEBwAARQHCAwCAogDhAQBAUZAN4S1ZsmT79u0TJ05siw7U1tbOnj17zJgx/fv31z1r165dvXp1Gx0uwyZNnz79yiuvHDx4cK7aAAAAAbkUXrB/7ty5vXv3Hj16dJM6IHp7+umnRTClpaUuP2STD20AAICAdi88edZFF13k1bJ58+Ynnnji5ptvVv/lBIQHAJCHZE94sjFr1iz5++CDD4rVRFT6r/Db3/522bJlixcvlu1BgwYtXLhw7969EreNHDlyzJgxsvPaa6/VGE7iOXnivHnzOnfuLPurq6tnzpw5ZcoU/VePJX/VmvLohAkTVq5c6Q8qj65Zs8ZXNXXqVDlWz549ZY8efdiwYVq5Bo4VFRVSuW9SZWWllJk8ebJKWuqXbl533XXSJDmKFuvfv38gPDnojTfeaCu3Y6WF9ejaTdnwe3ydwTBqVS+99JLWrL3L9bUEAJDXZEl4cl9eunSpCMBrRm7iaSI8KSZ28WqRh+SvbAfCC2pQA02aNEkqV9vJQ3JQu1+PIir1TpKgcNOmTZdddpm658ILL5Q2aAO8JqX92hgpPG3atDvvvNMfoq739Y7UtpWVlfnKrWKjka49ovz7hz/8YciQIffee2+PHj20mO2vHUZ9u6DNC8YEAABiyXZK00Y/6YVnZ+ZEM3PmzJG22nt6+uUqQQ0+8tOqzj333EOHDqXJstqnW8nZ9luP2q59/etfDzY01IvGo0Ejoz1NGi4ruaAZAAAQS/sQXlQVLm66zs7n+USix8eL8pBUbkMim1/VYrYB9uhphOcb4D03YMAAn1NVbIrSxc1uRhXoh8UWtn1HeAAAmdA+hBcb4QWLXIIySR9OUHvJhk8k2npiI7wMhRcb4QUxaECjEZ4zFkd4AAAtIX+FV1lZqfNVwdSapvKkTJrlKq5+xYrO4fmW+KNL7KWS0BUr2h59VOfPMhSeHEI2fOCo03UuteokOofnm+GnJLUGKZnhHB7CAwBoNrkUnl9FqWKTm/i4ceOkjF+lWV5evmDBAmeykV4AmzZtsgFcdD7PpawgFa5fv97V5xKXLVu2c+fOYJWmX34pZS699FI5aJMivKFDh8pDzizCDFZpRvOlXniu4VJSfdSu27QLOxEeAEBLyNOvFovm+izRD7qlL99GYBoAgHZEuxRe+uUqWQPhAQC0I9ql8PIEhAcA0I7IU+EBAAC0LggPAACKAoQHAABFAcIDAICioE2E51LOy3XXAAAAviC0nWulCC/X/cqUjRs3PlL5p/bY8sw7BQAA8RSP8DamePWW7e2u5U3qFAAAxNNawgt+rCAPueyyy+RvVHjzy+Y3u86c0/t3vYNOAQBAPAgP4QEAFAUID+EBABQFCA/hAQAUBQivkIS3+/Ov/veeyg92H0oqf3q3k/6169Jux72X64YDAGQdhFdIwnv075PPPu+S888/P6n8unXr3n591U++MivXDQcAyDoIr5CEl8m33sR8+wAAQDFQYMLbsmXLQw89dMcdd+jvhluaLLwa55Y7t7X+35HOnVW/vde5550b4Ny3TPl3nNvXcE/d8URKMm71BZbX7++bqrDMFHvFPOvHznVz7s/OvVm/R/79vnNdwja2ivAWrO7269e6+n+/97X9t373o9KSY7K9bW/Hu/542h3/sqNPl8MZnoLn3+60fV/H8RftDva/8eGJS9/q7Gtup3xcUzL5uV7XX7T7G70+yfAptUc73PunUysrquUpSYOTOXJGJi2tO+lzKrdnflLSVzX936oe+J/uTepU+0Kuvfmru826/MMvlx3N8qHTXDAtvxgKDH+LkG3/komWadGpRHjxwlOlXVAvuSMp/QiXOnd86tFXU0YcbiQUFZ4WG54Sm2zsMJKTAX8yJTZ1oTzayQjVH/Gs+gIJtJbwenc6/P2z9/l/X3z3lGbfT7MvvLa+cYgY5q3qIdZv3musFYVnq3KRE9eSqrI2Gm2EeEXemU24ZGf0orUP5VXjC0x4aU5BhmQiPNfCcUN4McJT2fRMNpCarIdz1fUKdHHCeyf196yU3v7SMKRzqZ3v1D89n4TnWnZJIbyAVhRecE9pifCafXvKK2dk0h075nnVeIQXkKHwWnQS21R4r7/++nPPPVdeXv7LX/7yscceO++885YtW3bLLbfIQxdffPF9990nWqqurpY9L7/8suyUPaNGjdInXnPNNbIxcODAOXPm9OvXT4rdddddI0eOnDdv3oYNG/zTXeq3yH0N06dPX7NmTUuFZyMzi1eaFvi2c381XgyEdyRVpiIVAkZ95lIB4opU+S55Jzx/Scm2fXc8aWnvjw7U6f2hK7fJtajpmrd31g2TT4Tqy1gqvPtPp8r+/7hgj76krfDUAS+8e4otYJHCNzzdR7enfvcjbZttp391LX+nk8/HRlt1do8azX7oEb/df/+Tr3eVh+Sg1w35u7bh1JOP+HA2ely7xz/LvxTto3p06b523O+JCi+oRAsMPv2QPQXRsd21v8SP/4gzDzj3+Ysb6wbQt983xu/RmitOrXlyXZeK02psptpXJZXfdOmuX/y5u7ZHT1P5CZ8987+dpf2dTzxqT7r8taNhT5yekSF9D/5iZXd9yHbBn0R76v9z6N/+b8eJenXFnlw9KX5I/dkMaq449RPbHfumyg5+cCqlhbYx9jJIfylGMyL6b5oLL3rBSIGL+x08dLhD9OK3Z0ePmNROvZxkQ18CfpCdmafQlry8pdzLNRgTe7qrPu74zu7Sg59+6a0dZXqU6ODrU+SikhPtRzK4oqLva4P2nHD8Md+joOZAeNGrqNnJiTraWnjiLVWd/Cu2W7du3a233lpaWirbH3744fjx4xcsWNCrVy/xXG1t7fvvv3/WWWfJs2Sn+kyVKU+pqakRq/Xs2VO264bj3nu7d+8uT1fbyYYcQmqQ/VVVVd6FliYIz8ZesfsP1BtRpaWJzUB4vrBLUJdVWp4Jz99xOpUd043upxy1l+C+2g59OtfdYaWwvyh1okJfIfbS1Ft5cDXrzqRr96k3u3zvzP36GvAp+6R7on2nrC25omKfFpOH1n5wkj/ojo+Pl6pkW8rsPVSiL2mpVvbo02OPa99RBjcLW6bmaIe+XQ7//u1OPzh7n4rfHjqI8BoNO2LHNk2EZxsTDLX8jd6AbFVRK0RV7U960vtrbee5vT6xJyJotl5FXu02eZ7m5Oow+vdSUr8vLC3curfjwG61SeFFsD96KruffMS/IYudHIpeEu/v6ejfutm3hmkuvNgLRgwx4mv7A+HZWXNp/PpdpTKkSe3U15qeLNkvT4xe0q9uLR/UvTaN8Pzp1mY//NevWKFGB1+foi9w7YW0NnpxBneYoD37ajps3nPC8K8eSHOL0BZGz7VrSW4jCxGeGk5tdPnll6v8RFT333//z3/+8yeffLJuLMaP/2J06hVYd25qayWkGz16tAhMIrwbbrhBoj1b8/r16/0hXGulNDMXXpnxXCA8v1zlSGbC84tW+qaSnyUNF62cE9eerAsviEJiKwkSNf4i3rCzVDckUrF3TCnw6rbypMSOfRVlIrwgcRrcau3sl6t/BcbmWpMmfvzNYmCP2vRvM/2z9M1sILyk9qcf2zTCs9vSyHmruv3wnL1Br5MGNvqW3wbiwUlPIzzbtmBUpY/yV0Ix+9xGT27QftkvkajEo4+/3sWfvtij2/36FD2ibXzQkUbjhuiLwp67TC684IUWe97TpFui7bQ1+P0SlEdPUGzJ4HSnKWZH0vo+zcXZ6AUTbVuS8IJz7VqSDc6a8GziUfHpSjHcAw888KMf/chHb7/5zW9sPRIjnnHGGbHCe+GFFzRS1JKtI7wMU5paQBdzftO5/UZ4snO1cxfV11AQKU2fV/G5LJtpcfUJh+BalKp+92aXCZfs9sKTDZ8jUqI5EJsh8TmcTIQXHD3JT3r/9bGRfcMePW6s8M7oejj25W0zYDZ7E71DaXfkPb7KKagndmyThBcUVuRtexorZyI82wx/0jMUnk3tKlLDt/ocjLVC0skVtfh0lmIvhl+/1tVfOc0QXvSNTmzcEHtJ6PVjz12jF170XETv2rHSTdPOWD/JdvQNXDOEZ3OJdvCrPylpkvCSJu/t4nC9upLm8IJz7dqF8HyspsaK4hOeDz/88JAhQzQQ9OgcXqMRnk2HBvU3edFKIJvoopXhZsnlX1KR2eF64SWlN22IlseLVtJfxPqeK5iIalKEpwpMWr1i70otjPCSYp1Y4dnQs3kRXuDONBGeL/zj8/b8/u1OwWgkrcZMH+GJTgKxpYlaMhRecNJ1tibDCC8auAfPtem7pAgv9t2Ax+fcPj3SoakpzWhHomOYdCnq27gfnL3Pn7tMLrzo5J+LxC6NRni2nW0d4cUOfvCU5kV4tpvpI7zoudb8qn/9No2sCc81nMPTAmLBZ5999oorrpA91mFRaSUJb8eOHZMmTZo2bVprzuG5+o8lDK/3jernpHqHRUNAzUkOTRWwy1WcKXDIOK8qFd75j9a1kvCa900rQTbMzvrY99ovbDzlqnOk5/+4QK8+b6+/vu3MmZ0GsBM5sXN4sY20ryg7M2GveDv9k/kcXnrheSUHx02aw5NKnn2rk53D2/y3Uhtr6qNJwtMbyru7Sm+4OPyQlr132B5lOIfn62mh8KRMcNIzF17s58+CsxOcxKST6/f7TvmJUt/aJOEFI9DUObykS1HPnRQ4q1utl3SjF15wwcTO4dmjZDKHF9WYvhXz5XXO7P09HZNm/pKE5xo6JnZMXAbCC8ZZ2tP/K5/Of7mbjol9NCo86Uv0XLu0azgbIZvCc6n5uQceeEC3f/azn+miFd1jF176xZyCpjprampihSc1b9myRZy3YcOGgQMHTpgwYfny5dn44HkgPC18Wn3C863URjDllv6D560hvOZ9l2bwwXM/g+0iUxGaNLMLMv0KrtO+fEQdJjt1oZcW9ivHgjupzZbYI7qG2Tw51qFPvxTkVGX/nSM//K/1na0SpLY0a0eDG1+s8FzqhRQ9rh+i6CpNPwKa7bEpuH//5+pd+zumifCckWJ0eiN2bKPxiv0Qus0iasdd8q0h8zm84KTb0Ug/ixabDLRnx57EpJPr4nJfwZI/HT3tfjQ9Hoy5bbw9qK2q0Usx9txleOHpOZICFafW/O1gSfolynb1ULSdSXFb7Inzg3bTsF1vfVTWaIQXvTkEicdAeGlOQbQ9fl5DLoxvnnHwpI7H0szhBec6SFM3jQL7HF4asvfVYrEzdm0Dv5bQrimwT2I1lZZ/cit/jgJZgw+eZ0SWhBcsV2ljEF77pRlf21ZgZE1FOfxqMWhd+GqxTCmGL4+GdoHP8AS53GKD2AuyDcJDeAAARQHCQ3gAAEUBwkN4AABFQasI7913333vvfdceyAQXjtqeYadAgCAeFouvJ88M6IdOcO6oX21PMNOAQBAPC0XXrtmw8Ezj9V9TzMAABQOHdzRgeUbw73FLDyxXb9LJua6FQAA0PpsWTU3dF4xC+/df7rrjF5dWl4PAADkG5tWzRtUvr7BLoSX61YAAEDrg/AagPAAAAoVhNcAhAcAUKi0lfDs74C4+l+RyHVnGwfhAQAUKm0oPPu7wPaHEPMZhAcAUKhkQ3iu/fzKF8IDAChUciA8/+u9/iePnfkVXf3120+PdLjrj6ddc/7f56/u9vbOMlvS/lSu3687v91//5Ovdw3K29+J1t9MsjXYnzkefPqhAcNuRngAAAVJNoRnf9bS/lif//n2DTtL/S/Eb9hd2rfLYRHe5Od6ST2+pD7rhOOPiZm6n3zEu9Pu3/Hx8Vpe9LnrwPFS4a79JV80o7pjp9JjWlLc9v2z96nnKiuqB/aoRXgAAIVNNhataNAmMnOpSK53p8M6mSe+mbeq2w/P2Vv9SUnwk7XB70B6M3U+8agNHANjyYb+eKbX7b6aDsFPSAehpyjz1W3lPtdKShMAoFBp8wgvGlFpLtGjP/GseU6fioz+8LGY8lt9DsqGjwX9fjHoiK/tjxWexpeqXnsg2wDrY4QHAFCoZDulqd5SLUXxJTuVHcskwnP1IkyK8GzIOPm5XtdftFtq+N2bXSZcstsr04LwAAAKlewtWln7wUk6XRdkL4UV753cv+unNrAT4Ymfzu31iSYb/dNlO80cXlR47+/pKP/Kzuh0nf2MBItWAAAKniwJT42iovLLJl19OlEs6NOMmnhU8w3pe/AXK7s7s8DSNVylGSy8jJ3D81OJU7/7kUpOo723d5b5I7JoBQCg4MnTrxaLzuFlB1KaAACFCsJrAMIDAChUEF4DEB4AQKGSp8LLFQgPAKBQQXgNQHgAAIUKwmsAwgMAKFQQXgMQHgBAoYLwGoDwAAAKFYTXAIQHAFCoILwGIDwAgEIF4TUA4QEAFCoIrwEIDwCgUEF4DUB4AACFCsJrAMIDAChUEF4DEB4AQOEx9b7H777laoTXAIQHAFBgiO1mzrzvsz1vILwGIDwAgELC286R0gxAeAAABYO1nUN4AQgPAKAwsLZjDi8GhAcAUAAEtmMOLwaEBwDQ3om1nSOlGYDwAADaNUm2cwgvYMPBM/tdMjHXrQAAgNZny6q5A8s3NthVzMJzKecdd8ZPct0KAABoNT57//EO7mhoO9dU4fXp444edXOdK8l1hwAAADLnqHMTRV4lbtu24JEE4Y0Y4TZsqHvOgFw3HQAAIHM2ubpobeBA9+KLwSMJwpsxw82f7y5wbmyumw4AAJA5i5x7zbnrr3e33x48kiC8qio3dGhdVnO0c8Nz3XoAAIBMWOHcklQ+85VX/rEYxZAgPOHxx93kyXUbEudd7Fxf5vMAACAvOercVudeTsV2wqxZ7uqro6WShedSzrvttro4DwAAIP+R2O6ee2Jt5xoRnkvlNhctcitWuE2bMB8AAOQj4rkBA9zw4W7s2Ggm03PcG2+8keuWAgAAtDnHHThwINdtAAAAaHMQHgAAFAUIDwAAioL/B1onWPZqIw9HAAAAAElFTkSuQmCC)
* Make any AJAX request on the target website and you will see the request tampered and filled. Then you can modify & replay it.
