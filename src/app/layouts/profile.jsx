import React from "react";
import "../profile.css";

const Profile = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-7">
          <div className="card p-3 py-4">
            <div className="text-center">
              <img
                src="https://sun1-90.userapi.com/s/v1/ig2/qjhRzErlQ9NrxyCJu--nJWUx5GKf6vF0A64XVVDaR1qoD0n_EWya1ZcFYbRQ6TBXLj1obDSIDrYXruyYSCz9RGIa.jpg?size=200x200&quality=95&crop=731,0,1364,1364&ava=1"
                width="100"
                className="rounded-circle"
                alt="me"
              />
            </div>

            <div className="text-center mt-3">
              <h5 className="mt-2 mb-1">Александр Чирков</h5>
              <span>Frontend Developer</span>

              <div className="px-4 mt-1">
                <p className="fonts">
                  Привет, меня зовут Александр Чирков и я начинающий Frontend
                  разработчик.
                </p>
              </div>

              <div className="buttons">
                <div className="buttons__item">
                  <a href="yandex.ru">Message</a>
                </div>
                <div className="buttons__item">
                  <a href="mailto:work.chirkov@yandex.ru">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
