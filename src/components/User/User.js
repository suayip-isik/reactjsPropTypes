import PropTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends, adress }) {

    if (!isLoggedIn) { // Early return  
        return <h1>Giriş Yapmadınız</h1>
    }

    return (
        <>
            <h1>
                {`${name} ${surname} (${age})`}
            </h1>
            {adress && `Title: ${adress.title}, Zip:  ${adress.zip}`}

            <br />
            <br />
            {
                friends && friends.map((friend, index) => <div key={index}>{friend}</div>)
            }
        </>
    );
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    friend: PropTypes.array,
    adress: PropTypes.shape({
        title: PropTypes.string.isRequired,
        zip: PropTypes.number.isRequired
    })
}

User.defaultProps = {
    isLoggedIn: false,
}

export default User;