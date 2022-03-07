import { useRouter } from 'next/router';

function Profile() {
    const router = useRouter();
    console.log(router);
    return <h1>progile{router.query.id}</h1>;

}
export default Profile;