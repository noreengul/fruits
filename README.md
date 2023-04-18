 


## How To Use

#### Clone the repository

```bash
git clone
```

### set database credentials in .env file

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=fruits_db
DB_USERNAME=pmauser
DB_PASSWORD=root

#### Copy .env.example file to .env and edit credentials

#### Install Via Composer

```bash
composer install
```

#### Generate Application Key

```bash
php artisan key:generate
```

#### Migrate Database

```bash
php artisan migrate
```

#### Run Seeder

```bash
php artisan db:seed
```

#### Install Dependencies

```bash
npm install

npm run dev
```
####  Get Data from api
php artisan app:store-fruits

#### All set.. Navigate to site url to browse demo.

 
