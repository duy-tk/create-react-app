# COSMOS – Internet Blockchain
## 1. Cosmos?

Cosmos là một hệ sinh thái blockchain đa chuỗi (multi-chain) có khả năng mở rộng và tương tác giữa các chuỗi khối. Khởi điểm là cosmos SDK dựng trên nền của Tendermint để giúp devs dựng 1 mạng blockchain nhanh hơn và đơn giản hơn. Thông qua việc sử dụng thuật toán đồng thuận Tendermint. Mục tiêu chính là tạo ra một mạng lưới các blockchain độc lập với nhau nhưng có thể giao tiếp và làm việc cùng nhau một cách hiệu quả.
SDK Cosmos là một khung nguồn mở dựng trên nền của Tendermint giúp dựng 1 blockchain đơn giản và nhanh gọn hơn. Chuỗi khối được xây dựng bằng SDK Cosmos thường được gọi là chuỗi khối dành riêng cho ứng dụng .

Mục tiêu của SDK Cosmos là cho phép các nhà phát triển dễ dàng tạo các chuỗi khối tùy chỉnh từ đầu có thể tương tác tự nhiên với các chuỗi khối khác. SDK Cosmos được hình dung là khuôn khổ giống như npm để xây dựng các ứng dụng chuỗi khối an toàn trên CometBFT. 
Các chuỗi khối dựa trên SDK được xây dựng từ các mô-đun có thể kết hợp được , hầu hết trong số đó là mã nguồn mở và sẵn có cho bất kỳ nhà phát triển nào sử dụng. Hơn nữa, Cosmos SDK là một hệ thống dựa trên khả năng cho phép các nhà phát triển hiểu rõ hơn về tính bảo mật của các tương tác giữa các mô-đun.

### Ưu điểm của SDK Cosmos:

*	Công cụ đồng thuận mặc định có sẵn trong SDK Cosmos là CometBFT . CometBFT là công cụ đồng thuận BFT mạnh nhất (và duy nhất) hiện có. Nó được sử dụng rộng rãi trong toàn ngành và được coi là công cụ đồng thuận tiêu chuẩn vàng để xây dựng hệ thống Proof-of-Stake.
*	SDK Cosmos là mã nguồn mở và được thiết kế để giúp dễ dàng xây dựng các chuỗi khối từ các mô-đun có thể kết hợp được . Khi hệ sinh thái của các mô-đun Cosmos SDK mã nguồn mở phát triển, việc xây dựng các nền tảng phi tập trung phức tạp với nó sẽ ngày càng trở nên dễ dàng hơn.
*	SDK Cosmos có tính bảo mật dựa trên cơ sở năng lực tiềm tàng và được cải thiện thông tin sau nhiều năm vật lộn với các cỗ máy trạng thái chuỗi khối. Điều này làm cho Cosmos SDK trở thành một môi trường rất an toàn để xây dựng chuỗi khối.
*	Quan trọng nhất, SDK Cosmos đã được sử dụng để xây dựng nhiều chuỗi khối dành riêng cho ứng dụng đã được đưa vào sản xuất. Ví dụ: Cosmos Hub, IRIS Hub, Binance Chain,Terra hoặc Kava.

### Thuật toán đồng thuận Tendermint (mở rộng từ giao thức PoS):

Tendermint là một thuật toán đồng thuận Byzantine Fault Tolerant (BFT). Bản chất của thuật toán này là để các node trong mạng lưới đạt được sự đồng thuận về trạng thái của blockchain. Nó được thiết kế để đảm bảo tính toàn vẹn dữ liệu và tính nhất quán giữa các node trong mạng lưới, ngay cả khi một số node gặp sự cố hoặc có hành vi độc hại.

### Giải thích thuật toán Tendermint:

*	Các node trong mạng lưới Cosmos chạy bản sao của ứng dụng blockchain và sử dụng giao thức Tendermint để đồng thuận về trạng thái của blockchain.

*	Các bước trong quá trình đồng thuận:
    * Đề xuất (Proposal): Một node trong mạng, thường gọi là validator (người xác thực), đề xuất một khối mới để được thêm vào chuỗi khối.
    * Bầu chọn (Voting): Các validator khác trong mạng lưới sẽ bầu chọn đồng thuận về việc chấp nhận hoặc từ chối đề xuất này.
    * Đồng thuận (Consensus): Khi đa số đồng thuận với đề xuất, khối mới sẽ được thêm vào chuỗi khối.

Cơ chế đồng thuận của BFT dự trên công thức 3m + 1 (Trong đó m là số lượng node độc hại cho phép và 3m+1 là tổng số lượng nodes trên hệ thống để có thể chạy được). Marshall Pease, đã tổng quát hóa thuật toán cho mọi n > 0 và chứng minh rằng 3m +1 là cần và đủ.
Tendermint hoạt động trong môi trường có lỗi Byzantine Fault Tolerance, nghĩa là nó có khả năng chống lại hành vi độc hại của một số node trong mạng, cùng với khả năng mở rộng và xử lý các giao dịch một cách nhanh chóng và đáng tin cậy. 

## 2. CosmJS?

CosmJS là một bộ thư viện mã nguồn mở được phát triển bởi Cosmos SDK nhằm hỗ trợ việc phát triển ứng dụng và tương tác với blockchain của Cosmos. Nó được viết bằng TypeScript/JavaScript và cung cấp một loạt các chức năng và giao diện lập trình ứng dụng (API) giúp dễ dàng tạo và gửi các giao dịch, truy vấn thông tin blockchain và làm việc với các khối trong mạng.
CosmJS là một thư viện bao gồm nhiều gói npm nhỏ hơn được gọi là monorepo có thể sử dụng như một thư viện. Một vài ví dụ: stargate, faucet, coswasm-stargate,….
 


### Cách sử dụng CosmJS:

1. Cài đặt: Cài đặt CosmJS thông qua npm hoặc yarn.

2. Tạo tài khoản: CosmJS cho phép tạo và quản lý tài khoản trong mạng Cosmos. Có thể tạo tài khoản từ seed phrase hoặc private key.

3. Gửi giao dịch: CosmJS cung cấp các phương thức để xây dựng và ký các giao dịch trước khi gửi chúng đến mạng Cosmos. Có thể sử dụng thư viện này để tạo các giao dịch tùy chỉnh cho ứng dụng và gửi chúng đến blockchain.

4. Truy vấn thông tin blockchain: CosmJS cho phép truy vấn thông tin về trạng thái của blockchain, như lấy thông tin tài khoản, thông tin khối mới nhất, lịch sử giao dịch, và nhiều hơn nữa.

### Ưu điểm của CosmJS?

1. Tích hợp dễ dàng: CosmJS giúp giảm đáng kể công việc tích hợp ứng dụng với mạng Cosmos bằng cách cung cấp các API tiện lợi và tương tác chuẩn với blockchain.

2. Tối ưu hóa hiệu suất: Thư viện này được tối ưu hóa để đảm bảo hiệu suất cao, giúp tăng tốc độ xử lý giao dịch và truy vấn thông tin.

3. An toàn và tin cậy: CosmJS đảm bảo các giao dịch được xây dựng và ký bằng cách sử dụng cơ chế bảo mật tiên tiến, đảm bảo tính toàn vẹn dữ liệu và độ tin cậy của giao dịch.

4. Hỗ trợ đa chuỗi: CosmJS hỗ trợ tương tác với nhiều blockchain độc lập trong mạng Cosmos, giúp tạo và quản lý các giao dịch liên chuỗi dễ dàng.

## 3. CosmWasm?

- CosmWasm là một công nghệ phát triển smart contract được sử dụng trong hệ sinh thái Cosmos. Nó cho phép viết và triển khai các smart contract trên nền tảng Cosmos và các blockchain đa chuỗi khác. "Wasm" trong tên gọi là viết tắt của "WebAssembly," một định dạng mã lệnh gọn nhẹ, di động và hiệu năng cao. CosmWasm giúp đơn giản hóa việc viết các smart contract và tăng khả năng tương tác giữa các chuỗi khối trong mạng Cosmos.
CosmWasm được viết dưới dạng mô-đun có thể cắm vào SDK Cosmos. Điều này có nghĩa là bất kỳ ai hiện đang xây dựng chuỗi khối bằng SDK Cosmos đều có thể nhanh chóng và dễ dàng thêm hỗ trợ hợp đồng thông minh CosmWasm vào chuỗi của họ mà không cần điều chỉnh logic hiện có.
Các smart contract được viết bằng ngôn ngữ lập trình Rust, sau đó biên dịch thành định dạng WebAssembly để chạy trên môi trường CosmWasm. Việc sử dụng Rust và WebAssembly giúp cho smart contract có hiệu năng cao và an toàn vượt trội.

### Ưu điểm của CosmWasm:

1.	Bảo mật: Viết smart contract bằng Rust và chạy trên môi trường WebAssembly giúp đảm bảo tính an toàn và bảo mật cho các ứng dụng phát triển trên nền tảng Cosmos.

2.	Độc lập chuỗi: CosmWasm cho phép triển khai smart contract trên nhiều chuỗi khối độc lập trong mạng Cosmos, giúp tạo ra các ứng dụng liên chuỗi.

3.	Hiệu năng: WebAssembly là một định dạng mã lệnh được tối ưu hóa cho hiệu năng cao, cho phép smart contract chạy nhanh và hiệu quả trên nền tảng Cosmos.

4.	Phong phú trong tính năng: CosmWasm cung cấp một loạt các thư viện tiện ích và tính năng cho việc phát triển smart contract, bao gồm quản lý tài khoản, truy vấn dữ liệu chuỗi khối, và nhiều hơn nữa.


## 4. BFT (Byzantine Fault Tolerant)
- Được lấy theo công thức 3m+1 trong đó m là số lượng node độc hại cho phép, và 3m+1 là số lượng nodes trên hệ thống để chạy được
- Ví dụ 3 nodes là 1 node độc => mạng dừng luôn, vì nó bắt phải > 2/3 => min 4 nodes thì 2 nodes độc mới chết nên nó an toàn hơn là 3 nodes




