from setuptools import setup, find_packages

setup(
    name="clickup_api_tests",
    version="0.1",
    packages=find_packages(include=["clickup", "clickup.*"]),
)