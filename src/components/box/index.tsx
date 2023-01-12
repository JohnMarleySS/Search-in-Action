
export function Box({user}: any){

  return (
    <div className="flex my-[8px] ">
      <div className="w-[345px] p-2 bg-white rounded-xl shadow-lg flex items-center space-x-3">
        <div className="shrink-0">
            <img src={user.avatar} className="w-[50px] rounded-full"  alt="perfil"/>
        </div>
        <div>
          <div className="text-[12px] color-[#18181B] font-bold">{user.first_name}</div>
          <p className="text-[12px] color-[#18181B]">{user.employment.title}</p>
        </div>
      </div>
    </div>
  );
};
