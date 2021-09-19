powershell Compress-Archive dist spending.zip
scp -r spending.zip root@194.87.69.217:/var/www/
ssh root@194.87.69.217 'rm -rf /var/www/spending; unzip /var/www/spending.zip -d /var/www/; mv /var/www/dist/my-spending /var/www/spending; rm -rf /var/www/dist rm /var/www/spending.zip'
rm spending.zip
