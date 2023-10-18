<h3 align="center">Node-Docker-Prune</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/YoloFTW/Node-Docker-Prune.svg)](https://github.com/YoloFTW/Node-Docker-Prune/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/YoloFTW/Node-Docker-Prune.svg)](https://github.com/YoloFTW/Node-Docker-Prune/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

## 📝 Table of Contents

- [About](#about)

- [Installing](#installing)

- [Configuration](#Configuration)

- [Usage](#usage)

- [License](#License)

- [Contribution](#Contribution)

- [Authors](#authors)

</br>

## About <a name = "about"></a>

Node-Docker-Prune is a Node.js app designed to automate the process of pruning unused docker images by running the "docker image prune -a" command periodically. This app is particularly useful for managing game servers, web applications, or any service that requires periodic pruning of docker images to ensure optimal performance.

</br>

## Installing <a name="installing"></a>

To install Node-Docker-Prune, clone the Git repository to your local machine:

```bash
git clone https://github.com/YoloFTW/Node-Docker-Prune.git

cd Node-Docker-Prune

npm install
```

</br>


## Configuration <a name="Configuration"></a>

To configure Node-Docker-Prune edit the .env file with the correct time and discord webhook url.

The default time is set at 00:00:00 each day.

You can also edit the "TITLE" variable to change how the module is reflected in the webhook message.

Node-Docker-Prune will also need elevated privilages to run. This can be acomplished either by running as sudo **NOT RECOMENDED** or by running the app as a user with access to docker commands


</br>


## Usage <a name="usage"></a>

To start Node-Docker-Prune, run the following command:

```bash
node index.js
```

Once configured and started, Node-Docker-Prune will handle the automatic restarts of your wings service as per the defined schedule. It will also send status updates to the specified Discord webhook after each restart.

</br>

## License <a name="License"></a>
This project is licensed under the MIT License. See the [LICENSE](/LICENSE) file for details.

</br>

## Contribution <a name="Contribution"></a>

Contributions are welcome! If you find a bug or have any suggestions, please open an issue or create a pull request.

## Authors <a name = "authors"></a>

- [@YoloFTW](https://github.com/YoloFTW)