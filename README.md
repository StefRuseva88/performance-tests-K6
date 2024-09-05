# Performance Testing with Grafana/K6
[![JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-F7DF1E.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Grafana](https://img.shields.io/badge/Monitoring-Grafana-F46800.svg)](https://grafana.com/)
[![k6](https://img.shields.io/badge/Load%20Testing-k6-2E8BC0.svg)](https://k6.io/)

### This is a test project for **Back-End Test Automation** March 2024 Course @ SoftUni

---
## About
This project demonstrates different Types of Performance Testing with Grafana/K6.

## Types of Performance Tests Covered
- **Smoke Testing:** Quick tests to check the basic functionality of the application.
- **Load Testing:** Evaluates how the system behaves under expected load conditions.
- **Stress Testing:** Determines the system's robustness by testing beyond normal operational capacity.
- **Spike Testing:** Assesses system performance under sudden, sharp increases in load.
- **Soak (Endurance) Testing:** Tests the system's stability and performance over an extended period.
- **Breakpoint Testing:** Identifies the point at which the system fails or its performance degrades significantly.

## k6 Cloud
In addition you can use k6 Cloud to run the tests and get some nice reports.

## Setting Up k6 Cloud
1. **Create a Grafana Cloud account:**
   - Use an existing account or register with your email and a password - [Grafana Cloud](https://grafana.com/products/cloud/)

2. **Navigate to k6 Cloud:**
   - After registration, find your way to the k6 Cloud section since Grafana offers multiple products - [k6 Cloud](https://grafana.com/products/k6-cloud/)

## Running Tests on k6 Cloud
1. **Log in to k6 Cloud:**
   - Use the k6 CLI to connect to your cloud account. You'll need an API token.

2. **Obtain Your API Token:**
   - Go to k6 Cloud
   - Navigate to **Testing & Synthetics -> Performance -> Settings**
   - Copy your personal API token

3. **Login via Terminal:**
   ```sh
   k6 login cloud --token {your-token}
   
## Run Your Script in the Cloud
- Go to Testing & Synthetics -> Performance -> Projects
- Run your script in the terminal
   ```sh
   k6 cloud {your-script-name}.js

## Further Studies

- [Official k6 YouTube channel](https://www.youtube.com/c/k6test)
- [Official k6 Documentation](https://grafana.com/docs/k6/latest/)

## Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss your changes.

## License

This project is licensed under the [MIT License](LICENSE). See the [LICENSE](LICENSE) file for details.

---
### Happy Testing! 🚀
