from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome(executable_path='path/to/chromedriver')

driver.get("https://www.imdb.com/")

def search_and_retrieve_info(query):
    search_input = driver.find_element(By.ID, "suggestion-search")
    search_input.clear()
    search_input.send_keys(query)
    search_input.send_keys(Keys.RETURN)

    search_result = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "result_text"))
    )
    search_result.click()

    title = driver.find_element(By.TAG_NAME, "h1").text
    release_year = driver.find_element(By.XPATH, "//a[contains(@class, 'titleYear')]").text
    imdb_rating = driver.find_element(By.CLASS_NAME, "ratingValue").text
    description = driver.find_element(By.CLASS_NAME, "summary_text").text
    cast_list = [element.text for element in driver.find_elements(By.XPATH, "//h4[text()='Stars:']/following-sibling::a")]

    print("Title:", title)
    print("Release Year:", release_year)
    print("IMDb Rating:", imdb_rating)
    print("Description/Plot:", description)
    print("Cast:", ", ".join(cast_list))

    full_cast_button = driver.find_element(By.XPATH, "//a[text()='See full cast']")
    full_cast_button.click()

    cast_members = driver.find_elements(By.XPATH, "//table[@class='cast_list']//td[@class='primary_photo']/a")
    print("First 10 Cast Members:")
    for i, cast_member in enumerate(cast_members[:10]):
        print(f"{i+1}.", cast_member.get_attribute("title"))

    driver.back()

search_and_retrieve_info("The Matrix")
search_and_retrieve_info("Inception")

driver.quit()
