# Ctf
# Struct Folders BE
## _Root_ : Src
## Src
- common: chứa các folder dùng chung cho dự án (utils, constants, types, baseException ....)
- modules: chưa các logic của từng features (Controllers,Services,Dto, nếu được có thể thêm Repository, Helpers)
- routes: quản lý các apis (router) của từng Features
- app.ts : nơi config các middlewares globals
- main.ts/server.ts: nơi start server 

# Common:
- utils: nơi chứa các functions có thể sử dụng chung cho tất cả mọi nơi (Role: phải là class AUtils - DateUtils..)
- baseException: nơi handle error quản lý response erorr trả về cho client, phụ trách log lỗi khi hệ thống gặp sự cố
- types: nơi custom type của thư viện hoặc các type sử dụng global (Như Env)
- configs: nơi chứa file quản lý các biến env (Class Config)

# modules/Tên Feauture (ví dụ auth)
-  [Feauture]Controller (nơi handle khi request, response, đây là nơi code gắn gọn nhất chỉ handle lỗi trước khi đưa cho service xử lý). 
-  [Feauture]Service : nơi xử lý trực tiếp nhưng logic phức tạp ,nếu không có file Repository thì đây cũng là nơi xử lý việc cập nhật database.
-  [Feauture]Dto: Là nơi xử lý dữ liệu trả về cho người dùng, và kiểm soát dữ liệu client request
-  [Feauture]Repository(optional) : nơi xử lý trực tiếp query database, khi service xử lý xong

# routes:
- [Feature]Router: Nơi quản lý các routes của features đó
- index.ts nơi combine các routers
- 
=> Dùng TSC để build projects


<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
