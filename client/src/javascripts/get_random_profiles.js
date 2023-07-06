/**
 * 랜덤으로 프로필 사진+아이디를 생성해주는 함수
 * 
 * @param {*} max 생성될 프로필의 최대 개수
 * @return profiles[]: list[list[key, profile_path, profile_id]]
 */
var get_random_profiles = (max) => {
    var profiles=[];
    var num = Math.random() * max + 1;
    var get_code = () => {return Math.floor(Math.random() * (122 - 97 + 1)) + 97};
    
    for(var i = 0; i < num; i++){
        var path='assets/random_pfp/pfp'+ (Math.floor(Math.random() * 52) + 1) + '.jpg';
        var id=String.fromCharCode(get_code(), get_code(), get_code(), get_code(), get_code(), get_code());
        id+=Math.floor(Math.random() * 999);
        profiles.push([i, path, id]);
    }

    return profiles
};

export default get_random_profiles;