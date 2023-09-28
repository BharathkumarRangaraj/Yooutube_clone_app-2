import React from 'react';

const Chatmessages=({name,msg})=>{
    return(
        <div className=' '>
            
            
            <div className='flex py-2'>
                <img className='w-6 h-6' alt='profile' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAh1BMVEUAAAD///9eXl7U1NT8/PzKysr5+fn39/c5OTny8vLGxsbq6uomJibi4uIpKSmKiorc3NwVFRUeHh4ICAi/v79+fn5MTEzs7OxCQkIhISE9PT1kZGS3t7eUlJSvr6/Q0NBUVFSgoKB1dXWAgICdnZ0yMjKOjo5ZWVlubm5jY2NJSUmpqakXFxd4O7BMAAAOZ0lEQVR4nO2d6YKqxhaFBQoQkUlQREZBkW58/+cLOLUDQxW1C8y9Wf3jpHMS4bPmXXuYcf/jmo3yFMQhhOo/r7r8A4dGefQogIomLBaLIIhuCoLqV0FTxng2W0A1jsKsKE7JbqdXWnr69afSbpeciiILo1hl+gqsAJHpHIx1cdodPduetci2lsfdqVgbB8dk1WFZACqaEx2KjdfG9SlvUxwix5QZvAwwIFLMRZT/7Cx8uLusnZ9HC1MBbkpQQMV0wmJ7Joe767wtQscEnXzAAJGsCfuTPhzuLv20FzS4zgoEiCQ32tDD3bWJVAmoq4IASlrgU3TMJp39QJMg3o0eEMnCPllarWvBMFUrSLIXZPpmpAcU0t0SmO7GuPxNhakBlSgBmFfapScR5ZxKBegG6ZwlXq15GrgTAcoLY8car9bOWFCsGoMBJdFIBuxXhshKDHHwjDoQUNIOgMtevzaHoYvGMEA18MfEq+UHw45VQwCRazCdOpulG+6QVXEAoBsk4+PVSobMp8SAkpaumKzr/bK9lHwkEgMGu4nwakJ76zAGNIuRloY2WYXJEFBe+Ktp+WazlU+27JMASvuxlvYuWcmeZDYlAFTXEywODbL1lGBJxAaU4vXUZH/KYuzZFBdQXpympnoWjz0QMQGlxe/UTK9KFphtiAfoltupid61LfEGIg4gUo3JV4dPrQwsQhxAOfyO6fNNeojTSzEA3fV0m7NO2WsMe00/oJt9ZfvV0rP+40UvoJQep+Zo1zHt3dT0ACLNmBqiW7nWg9gDqE5xdieR3jeXdgPKJcEt5jTyyu49TSegEnzx+LvrGHTOpV2ASjCKYZdWu07CDkDkfNn+s02/TsdE0wEY/0z95rj6iYcAKsXU742vor2TtgKq6y8wT+DKWrcuFm2A6PsOSF3alm3DsA1wAX63cvz9KTLDyNIiYXCpuFkQASIV1n529I3SEU1NVRVVM0UnygvgDmIlanMbNgPKgDtQ77c4LD68tLTF3khAj9FGs8dCIyBywB7tbfJAa+48rmPwS6jnVCf85tWwEdBMoJ66S52OraIk5ke4w3TSaNRvApQzmAFoHwuhz6pgGlsoRHvd9F02AMqiDvLMcxK5qOe0hjjF2Z5hEO2l2EDYAGjCrBAentWrmm/WUCN+09BJPwHVDOZh+B48SpAAddPs8zv9BHRAzvDbgOBGXXaA9r365/3oB6AKcseiO0Seu7ID5LXxuSd9B1T2ADOo5XctDk2SRBhCa/8+MN4BBYhD4KnrBNpGCLNcfBwN3wCVA8AI9LqtJC2EJYh9RD+8PfsNMObpn7FaD3JjBbrh4d+a8BVQyeg9k+0fQj+Im5AGsj6ds9cmfAUMAA4xv8EgvtrFCGQYbl+f/woIMJWt8uGxSCGEmdn2WwFRDDAKNh0Wrj65BUQTruLnOeAZUDLoP3+JdSvZpgjCmGEZz6/wBIhiAEM9T+Unr6UQTXh8bsInQNkACO4g8kL6kAzShGfjaR/1BKgl9J+9bTNu4QnFAO8ws5MnI8kTYAlgIDGGrYEPuSCr/bJsAEQShKUwoo03KkGmmeRvoDwAJQHgk2nWiKtEgL1ipT9ftgegCmEKTVsshPhSU4DXqIbKY7fxADQhDvIhdUS1FAK8RnWoeMwFd0DZgfjckjo6VSphTJaPE/cd0ISwiixJD/INcmAuLR6u3XdAEWL22tFEUd1fBMZoORdfAd09xKduAML9BRgDm713XwBhJq8f6km0Gisw0+js7td9AxRBDCI8QFoKDcg1fCc+AyKQHjrzqWI1r4Kxy9Z9FD0BKjCrj/9FLTgzlCdAAWaD5H/RGLyfTK+AAcxNa/I9s2jtw/YHCLQ/mu3w4zVaJYLFZ1yNJxdAqG5x/J6dzOy+878AOkBOMSuHPlMKnAfnxnkAhlBXrB93O8RCJdCrVF93+AAE84ppuGEllAvooWPcAV2omXl2ok6uAXJ9d1Pq3gBBTFkXeeQXg2+CuB25KxFvgIAfSjsIpRDQ9+lyDVMD5nAf+kPZR8H2MbWW+Q0Q0PX1HNEBwq2Cs9pN9goow2xEr2p3vcWRaoDGafDyBVCD9H3dBTTTDHAc7UarARHMYfcmm8o0msMGEu1EVAPCuDbddaQwHTrAvs66UwNyASigxQ+9YEIKdHI2Pbq0YAkboLsMB45CJYIOZFiVF0CIe89nbYctFVIA7uh/NmpAGeTm/0n2fMjBXhJP4KHCViFzM6TCp2cy+sIyP4W0lEGkje9WgBA312/SQ+K1QgU7kz4r0dAMAXkwv2iZkREitWQSSrsxK0CBSZBSJhD0UokR32wu1IBs0hOSJJY0WYXqswScJQGuDdFJ2LzBFRDmZrBB9m+Is1xIavjLLJXEXOTYAdaBLxhJwoQMJgylUWwBK8Rz0R09gWKfIR57wPoRmdOWU1rSFjnjFJcjAM7sJCuFz+BFSRUC4ADCBo0BWMk7GeVCUJX7rKq4QlwaBWBkXZtGAqy0OvLrMAqcSkFwWP/sxsmhNB7gRPoP8N+uCyCrrdo3aC5w7Pai36DrZnusnA7WUj/OKx2P+lhJdLcCowPvi6wd/+OnqXEog4WzEBfVQlGGeZoWPwnr1aI+8HIaw7ST1sZPs4MjxqapaaoiS1z1I8mK7GqaaQpitM9Sn2HS4JNWATIwOtVazflifXAE03Rbi39IsqoJYrXwF6cjsO3yIttXq1lUgU8cY5/nRRYJuGVNkKLGB+NnC162wlorteE3hwW0vWNhRCqpx4ykRQY/h519rPxi2d5DjnRL36QH0x0S41q14z79XQJ+3av9BTCCtPhsjJjG28l1MsBVy7teviygfItW/CGm98aTxcMvUCseF5frMwHkAtReJWHsAhSEQrIrhhuQwbgTLje8ILZ773QwFaB6V0hSFuEJoBUT7dKCkk//bXmGCFqxTHIF+ssY25eubiTUYZfHwlFBylw9CWlRSjm9r1LuCkiZo3jllyY0Xi1J2NNdGS4PN8CIKknjLo9ZFfNUnDXNWe737spFk9/B+qEtbdUpLdoMb8RL1ocaUBnsIGYfU4FFXcs/SYt08ABKlRsgNziJxI7exbdXymAHxIy7A+6HfUn2Rux+NyANTPmk7x+Awy7ozgW1+yueJNEfsiYmf07pw+KFCma1cz8I4yHRIlfHx2vky4DYLH0PXVC2S1pI3kv33B8gebCCVwJEmpEQGqSv+BzaQx6cdQzH5avbkHAc3nIfXQFJg+jtkNyXiVISadb9Wyj9LUAyItrXWvmY4+8ulaiq1ap8DpAkC51YdWR9ZimiumSbm5/ODVAj2a2dqDNWDBMiKR30FqRM4Ixqb0i8tGAV4VtX7meAe6KAGPtcsitbn89c8gH3Nef3XnYHxM7a5hnTDMDba+LuuR7ujndAJGL+nwDVm2kkYF4Vifdh9Ei3ouHtFLZUgR/0QhHWex4f/qoPQDfHAqQL3QGQhrXvzh8brb+cToKNsZ89idM2YF1Gr3+tsO2/if4vKxfCOHStRjjB98k1et/T8huSVlWLTP+5np9uCXxIFpO+19SfIjeeAPsTwM+/oAGrJuxNa9CSOE4+9G1mUyYGXlIhs+c9V4fm1H+9tzAQeQAgJBvdyeMTrTl5Iydl3fPoZuol4iYUd6aStfO2/KJI67RA2iFbGy++lKyrky61NkCO6zpw2UeA61sYoajjntsqXv7bV8CuWlk2/x0jsJbZ4dvz++rq/woodQTRHsMxEbrltlug9Px1pn9LJN6RHLKzwtjIktrDcvm364SPVPCtgezJtOekF0lC25nC60kF35FSiS49Mawks22W8d9T1H7Um2jdkRZfsgrWktSW2VD/iB/+AHRbbBd0GQCAhVS+ean/rFvbUBKleRTaxb8A0MMoiVLNMy1d9JsAteYu+j7DcI1liVqMwK314SaQ5DTOok2jqAFQEr2m9tcntRe+yswbHIRtT2w4zTWVBpPyJkD7vHZi4RsUl37TqcDOm06rjcXdtOb9zCo58d+g07zRwZtvnCSa6w+CuZCOqGPzHNEMCJXNcUy1FLpoKZGpQLhrjinr1HIn21bkFDJD3RhqzXf2f1umlpMH+ndNIn3fai5qLxWNemxsXyQ7az+LdxT7FtgENTGQ33FU7apHD5e1kq2SLqeILkAZqHwHY/FNtU2xADnZgUyax0i77szJnYCcFIEmU2Qhr6eOTjcgJwNnGwSXl/fcJ/QAVsvhV7eh174AYgKCZ4wElZ73vn4/oMIqoxS99E8j2gBATjoAJhaG1PKAcZ+HAcjJTLLWUWsVyhi3JTiAnBx84Xq4C7DuY7EAqxX/6/Y0PGZlBDxAToYo0AspHjfkDROQk75rX1pgl+7ABeRQvP6aJd8jqOOIDVgphKnHTSv7l6RSLAmgUsJnqSWXderdng0FrA75ydR4xFfpZIDVmj9xgqQ5qTcSISCqT/mT9VO7Pr0T+noQAlZSpzte6AMKiZMDVksiVHErQhVN938MADlZm2L3vQrb8niCA9YR/MbI/VQ3BjqrDgPkODdqvGVlpKUfDQ3IHArIIfPAj7R38/jD8HjowYBVP43zMfZu9pYqWQYFYB3QVzQ6ZEDiecWCysuRCrCSlm/ZMdreNqd1P6IFRJIZJjqLtHazs34KTczcc+wAa0QtYHIY5gOINEP0gLUkMwPehM8zoCAUGEAOuaZYzIEGoz0vRNMFcqAGAuTqDVxcrulTvlm/6zIetClrFhxgJUVblAZP4SV15I1yQZz3sVOggNwlIVqwTzcDGtL7TfeB4EKHf0EDXmQ6+yzlt0sLa1Da1nLLp9newTeVEYgJYC1FiMK1n2z15erc0p7WeeXp28Rfh5HAzBeVGeBFiik40d5Y+/xmO3/RdsP7a2MfLQSTrZ8tW8BKqJKiaqYgCOJD1S+mpir137F+PnPAWujK+fQvLr+NEir0D3EaCEXXL7cSAAAAAElFTkSuQmCC'/>
                <span className='px-2 font-bold'>{name}</span>
                <span>{msg}</span>
            </div>
            
        </div>
    )
}
export default Chatmessages;