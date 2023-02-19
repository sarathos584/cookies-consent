const cookiesBox = document.querySelector('.wrapper'),
      acceptBtn = cookiesBox.querySelector('button')

      acceptBtn.onclick = () => {
        // setting cookie for 1 month , after 1 month cookie will be expired automatically
        document.cookie = "CookieBy=Rambler; max-age ="+60*60*24*30;
        if(document.cookie){ // if the above cookie set
            cookiesBox.classList.add("hide"); //hide cookie box once cookie is set 
        }
        else{
            alert("Cookie can't be set! Please unblock this site from the cookies settings of your browser"); //if the cookie can't be set the alert an error
        }
    }

    //code for hiding the cookie box if cookie is set and not expired

    let checkCookie = document.cookie.indexOf("CookieBy=Rambler"); // checking the set cookie
    // if the cookie is set , hide the cookie box  else show it 
    checkCookie != -1 ? cookiesBox.classList.add('hide') : checkCookie.classList.remove('hide');
