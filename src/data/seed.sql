INSERT INTO journals (title, image_url)
VALUES  ('Summer Trip', 'https://images.unsplash.com/photo-1457269449834-928af64c684d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'),
        ('Winter Trip', 'https://images.unsplash.com/photo-1604537466573-5e94508fd243?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80');

INSERT INTO cities (journal_id, city_name, temperature, humidity, windspeed, weather_description, country_code) 
VALUES  ('1', 'London', '15', '1', '1', 'Sunny', 'gb'),
        ('1', 'Bath', '20', '2', '2', 'Cloudy', 'gb'),
        ('2', 'Hong Kong', '32', '3', '3', 'Rainy', 'hkg'),
        ('2', 'Birmingham', '17', '4', '4', 'Clear Sky', 'gb'),
        ('2', 'Tokyo', '30', '5', '5', 'Sunny', 'jp'),
        ('1', 'Kyoto', '30', '6', '6', 'Sunny', 'jp');